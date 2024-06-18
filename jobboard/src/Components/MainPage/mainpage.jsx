import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Grid, Typography, CircularProgress, Alert, Card, CardContent, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { db, auth } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const MainPage = () => {
  const [query, setQuery] = useState('');
  const [remotiveJobs, setRemotiveJobs] = useState([]);
  const [placeholderPosts, setPlaceholderPosts] = useState([]);
  const [trackedJobs, setTrackedJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const remotiveResponse = await axios.get(`https://remotive.io/api/remote-jobs`, {
        params: { search: query },
      });
      const placeholderResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=5`);
      
      setRemotiveJobs(remotiveResponse.data.jobs.length ? remotiveResponse.data.jobs : []);
      setPlaceholderPosts(placeholderResponse.data.length ? placeholderResponse.data : []);

      if (remotiveResponse.data.jobs.length === 0 && placeholderResponse.data.length === 0) {
        setError('No results found.');
      }
      setLoading(false);
    } catch (error) {
      setError('Error fetching data');
      setLoading(false);
    }
  };

  const handleTrack = async (item, isJob = true) => {
    if (!user) {
      console.log('User not authenticated');
      return;
    }

    const itemData = isJob ? item : { ...item, title: `Post: ${item.title}`, company_name: "Placeholder", url: "#" };
    const docRef = await addDoc(collection(db, 'users', user.uid, 'trackedJobs'), { ...itemData, status: 'Pending' });
    setTrackedJobs([...trackedJobs, { ...itemData, status: 'Pending', id: docRef.id }]);
  };

 

  return (
    <Container>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', marginRight: '20px' }}>
        Job Search
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8}>
          <TextField
            fullWidth
            placeholder="Search for jobs"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSearch} sx={{ mt: 2 }}>
            Search
          </Button>
        </Grid>
      </Grid>
      {loading && <CircularProgress />}
      {error && <Alert severity="error">{error}</Alert>}
      <Grid container spacing={2} style={{ marginTop: '20px' }}>
        <Grid item xs={12} sm={6}>
          {remotiveJobs.map((job) => (
            <Card key={job.id} style={{ marginBottom: '20px' }}>
              <CardContent>
                <Typography variant="h5">{job.title}</Typography>
                <Typography>{job.company_name}</Typography>
                <Typography>{job.candidate_required_location}</Typography>
                <Link href={job.url} target="_blank" rel="noopener">View Job</Link>
                <Button variant="contained" color="secondary" onClick={() => handleTrack(job)}>
                  Track
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          {placeholderPosts.map((post) => (
            <Card key={post.id} style={{ marginBottom: '20px' }}>
              <CardContent>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2">{post.body}</Typography>
                <Button variant="contained" color="secondary" onClick={() => handleTrack(post, false)}>
                  Track Post
                </Button>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
  
    </Container>
  );
};

export default MainPage;
