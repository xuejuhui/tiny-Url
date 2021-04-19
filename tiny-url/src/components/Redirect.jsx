import React, { useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { incrementUrlCounter } from "../api/urlRequest";

function Redirect() {
  let { shortUrl } = useParams();
  const history = useHistory();
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`/api/urls/${shortUrl}`)
        .then(async ({ data }) => {
          console.log(data);
          if (data?.fullUrl) {
            await incrementUrlCounter(data?.id);
            window.location = `//${data?.fullUrl}`;
          } else {
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchData();
  }, [shortUrl, history]);
  return <></>;
}

export default Redirect;
