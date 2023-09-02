"use client"
import { useState, FormEvent, ChangeEvent } from 'react';

interface FormData {
  username: string;
  password: string;
  // ... add other fields as required
}

export default function Signup() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    password: '',
    // ... add other fields as required
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('YOUR_DJANGO_BACKEND_URL/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      // Handle successful signup, like redirecting to login page
    } else {
      // Handle errors, maybe display them to the user
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {/* ... other fields ... */}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
