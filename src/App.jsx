import './App.css'
import { useCreatePostMutation, useGetPostByIdQuery } from './redux/services/jsonplaceholder';
import Test from './section/Test';

function App() {
  //GET istəyi atmaq üçün
  // const { data: post,  error,  isLoading } =  useGetPostByIdQuery(1)


  // POST istəyi atmaq üçün
  const [createPost, {isLoading, isError, error}] = useCreatePostMutation()
  
  
   const handleSubmit = async(e) => {
      e.preventDefault()

      const title = e.target.title.value
      const body = e.target.body.value
      const post = {title, body}


      try {
        await createPost(post).unwrap();
        console.log(post, 'post');
        
      } catch (error) {
        console.log(error);
      }
   }
  

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name='title' placeholder='Title' />
      <textarea name="body" placeholder='Body'></textarea>
      <button type='submit' disabled={isLoading}>Submit</button>
    </form>
    <Test />  
    </>
  )
}

export default App
