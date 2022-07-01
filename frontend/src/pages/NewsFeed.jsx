import React, { useEffect, useState } from "react";
import Api from "@services/endpoint";
import FeedMap from "../components/Feed/FeedMap";
import Nav from "../components/Nav/Nav";
import SearchBarDashBoard from "../components/SearchBarDashBoard";
// import DataFeed from "../components/Feed/DataFeed";
import "./NewsFeed.css";

function NewsFeed() {
  const [user, setUser] = useState(1);
  const [news, setNews] = useState([]);
  const [users, setUsers] = useState([]);

  const ENDPOINTNEWSFEED = `/news/${user}`;
  const ENDPOINTUSERS = `/users`;

  useEffect(() => {
    Api.get(ENDPOINTNEWSFEED)
      .then((result) => {
        console.error(result.data);
        setNews(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.get(ENDPOINTUSERS)
      .then((result) => {
        setUsers(result.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="feed-dashboard">
        <div>
          <Nav />
        </div>
        <div className="feed-search">
          <div className="user-selection">
            <select
              name="user"
              id="user-select"
              onChange={(e) => {
                setUser(e.target.value);
                // setIsLikedLoading(true);
                // setTimeout(() => {
                //   setIsLikedLoading(false);
                // }, 20);
              }}
            >
              <option value="">-- Please select a user</option>
              {users.map((usermap) => {
                return (
                  <option key={usermap.Id} value={usermap.Id}>
                    {usermap.firstname} {usermap.lastname}
                  </option>
                );
              })}
            </select>
          </div>
          <SearchBarDashBoard />
          {news.map((newsItem) => {
            return <FeedMap newsItem={newsItem} key={newsItem.Id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default NewsFeed;
