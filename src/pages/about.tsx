import React from "react";
import Style from "@/component/fundamentalsNext/handleFetchAPI/style";
import { IUserProfile } from "@/interfaces/profile";

const AboutPage: React.FC<any> = ({ data }) => {
  return (
    <Style.cardItems>
      <section>
        <span>Infomation User</span>
        <h1>Fetch API Component</h1>
        <div className="grid-container-ss">
          {data.length > -1 &&
            data.map((item: IUserProfile, i: number) => {
              return (
                <div className="cards card-ss">
                  <div className="card card--red active">
                    <div className="card__outer">
                      <div className="card__inner">
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                          >
                            <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                          </svg>
                        </span>
                        <p className="title">{item.username}</p>
                        <ul>
                          <li>Name : {item.name}</li>
                          <li>Phone : {item.phone}</li>
                          <li>email : {item.email}</li>
                          <li>website : {item.website}</li>
                          <li>Company : {item.company?.name}</li>
                          <li>City : {item.address?.city}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </Style.cardItems>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await res.json();

  return {
    props: {
      data: response,
    },
  };
}
export default AboutPage;
