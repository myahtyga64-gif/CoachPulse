import React, { useState } from 'react';
import { db, auth } from '../services/firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export default function WorkoutCheckIn({ onSubmit }) {

  const [status, setStatus] = useState('');

 async function submit(nextStatus) {
  setStatus(nextStatus);

  try {
    console.log("🔥 Click:", nextStatus);

    const user = auth.currentUser;

    if (!user) {
      console.log("❌ NO USER LOGGED IN");
      return;
    }

    const today = new Date().toISOString().split('T')[0];

    const ref = doc(db, "users", user.uid, "workouts", today);

    await setDoc(ref, {
      status: nextStatus,
      date: today,
      createdAt: serverTimestamp()
    });

    console.log("✅ SAVED REAL WORKOUT TO FIRESTORE");

    if (onSubmit) onSubmit(nextStatus);

  } catch (error) {
    console.error("❌ Firestore error:", error);
  }
}
  return (
    <section className="panel">
      <h2>Today's workout</h2>

      <div className="button-row">
        <button onClick={() => submit('completed')}>Completed</button>
        <button onClick={() => submit('partial')}>Partly done</button>
        <button onClick={() => submit('missed')}>Missed</button>
      </div>
    </section>
  );
}