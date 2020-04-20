import {useState, useEffect} from 'react';
import {getPostBySlug} from '../modules/fetches';
import {API_URL} from '../modules/constants';
import {truncate} from 'lodash';
export default (props) => {
  const [post, setPost] = useState([])
  
  useEffect(()=>{
    let ignore = false;
    const slug = props.url.split('/').pop();

    const getPost = async (slug)=> {
      const response = await getPostBySlug(slug)
      if (!ignore) setPost(response.data.post);
    }

    getPost(slug)
    return () => { ignore = true; }

  },[])

  return (<div className="container mb-5">
    <a target="__blank" rel="noopener noreferrer" href={props.url}><div className="preview__image mx-auto" style={{backgroundImage:`${props.showImages ? `url(${API_URL}/images/${post.image}) `: ''}`}} ></div></a>
    <h3 className="preview__title mx-auto">{post.title}</h3>
    <a className="mb-5" target="__blank" rel="noopener noreferrer" href={props.url}>Leer nota</a>


  </div>)
}