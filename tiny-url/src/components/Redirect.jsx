import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

function Redirect() {
  let { shortUrl } = useParams();
  const history = useHistory();
  console.log(history);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`/api/urls/${shortUrl}`)
        .then(({ data }) => {
          console.log(data);
          if (data?.fullUrl) {
            window.location = `//${data?.fullUrl}`;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [shortUrl]);
  return <div></div>;
}

export default Redirect;
