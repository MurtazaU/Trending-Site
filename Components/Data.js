/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react'
import './Content.css'
import Axios from 'axios'
import Table from 'react-bootstrap/Table'
import Col from 'react-bootstrap/Col'


const Randomizer = () => {
 const [content, setContent] = useState()
 
useEffect(() => {
  async function getData() {
   const response = await Axios.get('https://www.episodate.com/api/most-popular?page=1')
   setContent(response.data)
  }
  getData()
 }, [])
 

 return (
  <div>
   {content ? 
   <div>
     <div className="table-div">
       <Table striped hover size="sm" borderless  >
        <tr>
          <th></th>
          <th>Title </th>
          <th>Start Date</th>
          <th>Network</th>
          <th>Status</th>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[0].image_thumbnail_path} />
          <td>{content.tv_shows[0].name}</td>
          <td>{content.tv_shows[0].start_date}</td>
          <td>{content.tv_shows[0].network}</td>
          <td>{content.tv_shows[0].status}</td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[1].image_thumbnail_path} />
          <td>{content.tv_shows[1].name} </td>
          <td>{content.tv_shows[1].start_date} </td>
          <td>{content.tv_shows[1].network} </td>
          <td>{content.tv_shows[1].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[2].image_thumbnail_path} />
          <td> {content.tv_shows[2].name}</td>
          <td> {content.tv_shows[2].start_date} </td>
          <td> {content.tv_shows[2].network}</td>
          <td> {content.tv_shows[2].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[3].image_thumbnail_path} />
          <td>{content.tv_shows[3].name} </td>
          <td>{content.tv_shows[3].start_date} </td>
          <td>{content.tv_shows[3].network} </td>
          <td>{content.tv_shows[3].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[4].image_thumbnail_path} />
          <td>{content.tv_shows[4].name} </td>
          <td>{content.tv_shows[4].start_date} </td>
          <td>{content.tv_shows[4].network} </td>
          <td>{content.tv_shows[4].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[5].image_thumbnail_path} />
          <td>{content.tv_shows[5].name} </td>
          <td>{content.tv_shows[5].start_date} </td>
          <td>{content.tv_shows[5].network} </td>
          <td>{content.tv_shows[5].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[6].image_thumbnail_path} />
          <td>{content.tv_shows[6].name} </td>
          <td>{content.tv_shows[6].start_date} </td>
          <td>{content.tv_shows[6].network} </td>
          <td>{content.tv_shows[6].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[7].image_thumbnail_path} />
          <td>{content.tv_shows[7].name} </td>
          <td>{content.tv_shows[7].start_date} </td>
          <td>{content.tv_shows[7].network} </td>
          <td>{content.tv_shows[7].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[8].image_thumbnail_path} />
          <td>{content.tv_shows[8].name} </td>
          <td>{content.tv_shows[8].start_date} </td>
          <td>{content.tv_shows[8].network} </td>
          <td>{content.tv_shows[8].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[9].image_thumbnail_path} />
          <td>{content.tv_shows[9].name} </td>
          <td>{content.tv_shows[9].start_date} </td>
          <td>{content.tv_shows[9].network} </td>
          <td>{content.tv_shows[9].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[10].image_thumbnail_path} />
          <td>{content.tv_shows[10].name} </td>
          <td>{content.tv_shows[10].start_date} </td>
          <td>{content.tv_shows[10].network} </td>
          <td>{content.tv_shows[10].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[11].image_thumbnail_path} />
          <td>{content.tv_shows[11].name} </td>
          <td>{content.tv_shows[11].start_date} </td>
          <td>{content.tv_shows[11].network} </td>
          <td>{content.tv_shows[11].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[12].image_thumbnail_path} />
          <td>{content.tv_shows[12].name} </td>
          <td>{content.tv_shows[12].start_date} </td>
          <td>{content.tv_shows[12].network} </td>
          <td>{content.tv_shows[12].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[13].image_thumbnail_path} />
          <td>{content.tv_shows[13].name} </td>
          <td>{content.tv_shows[13].start_date} </td>
          <td>{content.tv_shows[13].network} </td>
          <td>{content.tv_shows[13].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[14].image_thumbnail_path} />
          <td>{content.tv_shows[14].name} </td>
          <td>{content.tv_shows[14].start_date} </td>
          <td>{content.tv_shows[14].network} </td>
          <td>{content.tv_shows[14].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[15].image_thumbnail_path} />
          <td>{content.tv_shows[15].name} </td>
          <td>{content.tv_shows[15].start_date} </td>
          <td>{content.tv_shows[15].network} </td>
          <td>{content.tv_shows[15].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[16].image_thumbnail_path} />
          <td>{content.tv_shows[16].name} </td>
          <td>{content.tv_shows[16].start_date} </td>
          <td>{content.tv_shows[16].network} </td>
          <td>{content.tv_shows[16].status}</td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[17].image_thumbnail_path} />
          <td>{content.tv_shows[17].name} </td>
          <td>{content.tv_shows[17].start_date} </td>
          <td>{content.tv_shows[17].network} </td>
          <td>{content.tv_shows[17].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[18].image_thumbnail_path} />
          <td>{content.tv_shows[18].name} </td>
          <td>{content.tv_shows[18].start_date} </td>
          <td>{content.tv_shows[18].network} </td>
          <td>{content.tv_shows[18].status} </td>
        </tr>
        <tr>
          <img className="tr-img" src={content.tv_shows[19].image_thumbnail_path} />
          <td>{content.tv_shows[19].name} </td>
          <td>{content.tv_shows[19].start_date} </td>
          <td>{content.tv_shows[19].network} </td>
          <td>{content.tv_shows[19].status} </td>
        </tr>
        
</Table>
</div>
  </div>
  : <h1>Please Wait</h1> 
  }
  </div>
)
}

export default Randomizer


