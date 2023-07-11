import React, { useEffect, useState } from "react"

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUserData()
  }, [])
  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  return (
    <section>
      <div>
        {users.length > 0 && (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Home
