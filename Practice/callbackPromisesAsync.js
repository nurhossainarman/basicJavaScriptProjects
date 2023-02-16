async function fetchPost(){
    const allP =  await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await allP.json();
    return posts;
}

// Callback function
function getUserData(id, callback) {
    setTimeout(() => {
      const user = {
        id: id,
        name: 'John Doe',
        email: 'johndoe@example.com',
      };
      callback(user);
    }, 2000);
  }
  
  // Promise function
  function getUserPosts(userId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const posts = [
          { id: 1, title: 'First post', body: 'Lorem ipsum dolor sit amet' },
          { id: 2, title: 'Second post', body: 'Lorem ipsum dolor sit amet' },
          { id: 3, title: 'Third post', body: 'Lorem ipsum dolor sit amet' },
        ];
        if (posts.length > 0) {
          resolve(posts);
        } else {
          reject('No posts found for the user');
        }
      }, 1500);
    });
  }
  
  // Async/await function
  async function getUserDataAndPosts(id) {
    try {
      const user = await new Promise((resolve, reject) => {
        getUserData(id, (user) => {
          if (user) {
            resolve(user);
          } else {
            reject('User not found');
          }
        });
      });
  
      const posts = await getUserPosts(user.id);
  
      console.log('User:', user);
      console.log('Posts:', posts);
    } catch (error) {
      console.log(error);
    }
  }
  
  // Call async/await function
    getUserDataAndPosts(1);
  



  