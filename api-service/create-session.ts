export const createSession = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/session/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    // console.log("Session created successfully:", data);

    localStorage.setItem('sessionId', data.session_id);
    
    return data;
  } catch (error) {
    console.error("Failed to create session:", error);
    
    throw error;
  }
};