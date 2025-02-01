import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Stack from '@mui/material/Stack';
import axios from 'axios';

const getData = async (url) => {
  return await axios.get(url)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      console.log(error);
  });
}
  
const Popular = async () => {
  const data = await getData('http://127.0.0.1:8000/igdb/popular/')
  //console.log(data)
  return data
}

export default function MainContent() {
  const [popular, setPopular] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try{
          const data = await getData('http://127.0.0.1:8000/igdb/popular/')
          setPopular(data)
          //console.log(data)
        } catch (error) {
          console.log(error)
        }
      }
      fetchData()
    }, []);

  return (
    <div>
      <Stack direction="row" spacing={2} sx={{ my:4, mx:4 }}>
        {popular.map((item) => (
          <Card sx={{ width: 300 }}>
            <CardActionArea>
              <div style={{ position:"relative"}}>
                <CardMedia
                  component="img"
                  height="150"
                  image={item.cover.url}
                  alt={item.name}
                  style={{ height: "150px", paddingBottom: "2%"}}
                />
                <div style={{ position: "absolute", color: "white", bottom: 10, left: "50%",
                transform: "translateX(-50%)"}}>{item.name}</div>
              </div>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </div>
  );
}