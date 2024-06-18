import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, MenuItem, Select } from '@mui/material';
import { db, auth } from '../../firebase'; 
import { collection, query, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const TrackedJobsPage = () => {
  const [trackedJobs, setTrackedJobs] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (user) {
      const q = query(collection(db, 'users', user.uid, 'trackedJobs'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const jobs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTrackedJobs(jobs);
      });

      return () => unsubscribe();
    }
  }, [user]);

  const handleStatusChange = async (id, status) => {
    if (user) {
      try {
        const jobRef = doc(db, 'users', user.uid, 'trackedJobs', id);
        await updateDoc(jobRef, { status });
        setTrackedJobs((prevJobs) => prevJobs.map(job => job.id === id ? { ...job, status } : job));
      } catch (e) {
        console.error("Error updating document: ", e);
      }
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Job Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Job Link</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trackedJobs.map((job) => (
            <TableRow key={job.id}>
              <TableCell>{job.title}</TableCell>
              <TableCell>
                <Select
                  value={job.status}
                  onChange={(e) => handleStatusChange(job.id, e.target.value)}
                  displayEmpty
                >
                  <MenuItem value="Pending">Pending</MenuItem>
                  <MenuItem value="Rejected">Rejected</MenuItem>
                  <MenuItem value="Interview">Interview</MenuItem>
                  <MenuItem value="Test">Test</MenuItem>
                  <MenuItem value="Ghosted at interview">Ghosted at interview</MenuItem>
                </Select>
              </TableCell>
              <TableCell>
                <a href={job.url} target="_blank" rel="noopener noreferrer">
                  View Job
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TrackedJobsPage;
