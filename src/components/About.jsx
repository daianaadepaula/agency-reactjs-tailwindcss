import React from "react";
import aboutImg from "../assets/about.png";

export const About = () => {
  return (
    <section>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={aboutImg} alt="Imagem de sobre" />
          </div>

          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
              How to design your site footer like we did
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGrey mb-8">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="px-4 lg:px-4 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local <br />
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M23.2958 29.5471L23.9031 29.0361C25.7081 27.5177 27.0026 25.4809 27.6109 23.2019C28.2193 20.9229 28.1121 18.5119 27.304 16.2959C26.4958 14.0799 25.0258 12.166 23.0932 10.8136C21.1605 9.46127 18.8588 8.73593 16.5 8.73593C14.1412 8.73593 11.8394 9.46127 9.90681 10.8136C7.97418 12.166 6.50414 14.0799 5.69599 16.2959C4.88785 18.5119 4.78068 20.9229 5.38904 23.2019C5.99739 25.4809 7.29183 27.5177 9.09686 29.0361L9.70421 29.5471L8.98113 29.8743C6.00796 31.2197 3.44947 33.3371 1.57166 36.0061L23.2958 29.5471ZM23.2958 29.5471L24.0188 29.8743M23.2958 29.5471L24.0188 29.8743M24.0188 29.8743C26.9921 31.2198 29.5507 33.3373 31.4285 36.0065L31.4357 36.0166L31.4433 36.0264C31.5892 36.2133 31.6956 36.4279 31.756 36.6571C31.8165 36.8864 31.8297 37.1255 31.7949 37.36C31.7601 37.5945 31.678 37.8195 31.5536 38.0214C31.4293 38.2232 31.2652 38.3976 31.0713 38.5341C30.8775 38.6706 30.6579 38.7663 30.426 38.8153C30.194 38.8644 29.9545 38.8658 29.722 38.8195C29.4895 38.7732 29.2688 38.6801 29.0734 38.5459C28.8779 38.4118 28.7118 38.2393 28.585 38.0389L28.5786 38.0288L28.5717 38.019C27.211 36.0809 25.4036 34.4989 23.3024 33.4068C21.2013 32.3147 18.868 31.7446 16.5 31.7446C14.1319 31.7446 11.7987 32.3147 9.69752 33.4068C7.59634 34.4989 5.789 36.0809 4.42827 38.0189L4.42716 38.0205C4.2672 38.2503 4.05392 38.4378 3.80561 38.567C3.55729 38.6962 3.28135 38.7633 3.00142 38.7625L2.99836 38.7625C2.63935 38.7637 2.28905 38.652 1.99698 38.4432L1.99458 38.4415M24.0188 29.8743L1.99458 38.4415M1.99458 38.4415C1.61601 38.1743 1.35888 37.7678 1.2796 37.3113C1.20034 36.8548 1.30529 36.3856 1.57142 36.0065L1.99458 38.4415ZM46.2901 38.4391L46.2901 38.4391C46.4786 38.3084 46.6393 38.1415 46.7628 37.9481C46.8863 37.7547 46.9701 37.5387 47.0093 37.3126C47.0486 37.0865 47.0425 36.8549 46.9915 36.6312C46.9404 36.4075 46.8454 36.1962 46.712 36.0096L46.7098 36.0065C44.832 33.3373 42.2734 31.2198 39.3001 29.8743L38.575 29.5462L39.1853 29.0353C40.9952 27.5204 42.2942 25.4845 42.9055 23.2049C43.5168 20.9252 43.4107 18.5125 42.6016 16.2953C41.7924 14.0781 40.3197 12.1641 38.3838 10.814C36.4479 9.46386 34.1429 8.74316 31.7827 8.75001L31.7804 8.75002C30.7301 8.74827 29.6846 8.8933 28.6744 9.1809L28.6654 9.18346L28.6654 9.18337C28.441 9.24275 28.2307 9.34618 28.0466 9.48762C27.8626 9.62907 27.7086 9.80571 27.5935 10.0073C27.4783 10.2088 27.4045 10.4313 27.3762 10.6616C27.3478 10.892 27.3656 11.1257 27.4285 11.3492C27.4914 11.5726 27.5981 11.7813 27.7424 11.9631L27.3639 12.2635L27.7424 11.9631C27.8867 12.1449 28.0657 12.2962 28.269 12.4081C28.4723 12.5201 28.6959 12.5905 28.9267 12.6152C29.1575 12.6399 29.3909 12.6185 29.6133 12.5521L29.6191 12.5504L29.6191 12.5504C30.3225 12.3498 31.0506 12.2486 31.7822 12.25M46.2901 38.4391L43.4437 38.3063L43.8524 38.0182C43.8523 38.018 43.8521 38.0178 43.852 38.0176C42.4885 36.0834 40.6807 34.5046 38.5805 33.414C36.4801 32.3232 34.1485 31.7526 31.7818 31.75H31.7812C31.3171 31.75 30.872 31.5656 30.5438 31.2374C30.2156 30.9093 30.0312 30.4641 30.0312 30C30.0312 29.5359 30.2156 29.0908 30.5438 28.7626C30.872 28.4344 31.3171 28.25 31.7812 28.25C33.903 28.25 35.9378 27.4072 37.4381 25.9069C38.9384 24.4066 39.7812 22.3717 39.7812 20.25C39.7812 18.1283 38.9384 16.0934 37.4381 14.5932C35.938 13.0931 33.9036 12.2503 31.7822 12.25M46.2901 38.4391L46.2842 38.4432M46.2901 38.4391L46.2842 38.4432M31.7822 12.25L31.7812 12.75V12.25C31.7815 12.25 31.7819 12.25 31.7822 12.25ZM39.5062 29.4188L39.7124 28.9632C39.7811 28.9944 39.8497 29.0259 39.918 29.0578C39.7838 29.181 39.6465 29.3014 39.5062 29.4188ZM39.5062 29.4188L39.8272 29.8022C39.8862 29.7527 39.9448 29.7028 40.0029 29.6523C39.8386 29.5721 39.6731 29.4943 39.5062 29.4188ZM46.2842 38.4432C45.9923 38.6519 45.6423 38.7636 45.2835 38.7625L46.2842 38.4432ZM9.84823 15.8054C8.96918 17.121 8.49998 18.6678 8.49998 20.25C8.49998 22.3717 9.34284 24.4066 10.8431 25.9069C12.3434 27.4072 14.3783 28.25 16.5 28.25C18.0822 28.25 19.629 27.7808 20.9445 26.9018C22.2601 26.0227 23.2855 24.7733 23.891 23.3115C24.4965 21.8497 24.6549 20.2411 24.3463 18.6893C24.0376 17.1374 23.2757 15.712 22.1568 14.5932C21.038 13.4743 19.6126 12.7124 18.0607 12.4037C16.5089 12.095 14.9003 12.2535 13.4385 12.859C11.9767 13.4645 10.7273 14.4899 9.84823 15.8054Z"
                    fill="#4A4AE6"
                    stroke="#4A4AE6"
                  />
                </svg>
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    2,245,341
                  </h4>
                  <p>Members</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M24.9036 18.3939L24.9033 23.4168V23.4168V23.4752C24.9033 23.5918 24.9184 23.7048 24.9466 23.8125L24.8988 24.6303L24.8962 24.6742C24.885 24.8659 24.8103 25.0335 24.6842 25.1598L26.1268 24.2149C26.0445 24.2014 25.9624 24.1722 25.8806 24.1277L25.4844 23.9119V23.4752V23.4168V18.3939M24.9036 18.3939V18.3938L25.194 18.3939L25.4844 18.3939M24.9036 18.3939C24.9036 18.5543 25.0338 18.6843 25.194 18.6843C25.3544 18.6843 25.4844 18.554 25.4844 18.3939M24.9036 18.3939H25.194H25.4844M19.2833 17.9449L19.2833 17.9449L19.2833 17.9449ZM19.2833 17.9449C19.0703 18.316 18.5586 18.4545 18.1849 18.2399L19.2833 17.9449ZM17.8522 18.8176L17.8516 18.8172C17.5772 18.6588 17.3794 18.3994 17.2976 18.0954L17.2974 18.0949L17.2974 18.0948L17.297 18.0933C17.2304 17.8428 17.2473 17.5807 17.3431 17.3432V17.1486C17.1722 17.4436 17.1265 17.7878 17.2149 18.117C17.3028 18.4459 17.5141 18.7208 17.8095 18.8921L17.8522 18.8176ZM25.0957 25.571L25.1558 25.631L25.0957 25.571L25.095 25.5717C24.8442 25.822 24.5077 25.9601 24.1545 25.9601C24.1545 25.9601 24.1545 25.9601 24.1545 25.9601C23.6743 25.9601 23.2532 25.7049 23.0194 25.323C22.9954 25.3353 22.9711 25.3471 22.9465 25.3586L25.0957 25.571ZM17.9195 17.4836C17.8377 17.6253 17.8166 17.7867 17.8587 17.944C17.8587 17.944 17.8588 17.9441 17.8588 17.9441L17.8588 17.9443L17.859 17.9449C17.9007 18.1012 17.9992 18.2308 18.142 18.3142C18.142 18.3143 18.1421 18.3143 18.1421 18.3143L17.9195 17.4836Z"
                    fill="#4A4AE6"
                    stroke="#4A4AE6"
                  />
                  <path
                    d="M16.1252 30.7918C15.9467 30.8993 15.7158 30.8413 15.6091 30.663C15.5021 30.4849 15.5601 30.2537 15.7379 30.1468L16.1252 30.7918ZM11.7469 26.4271C11.7615 26.4007 11.7752 26.3761 11.7879 26.3532C11.8391 26.2609 11.8738 26.1984 11.8878 26.1733L11.9636 26.2132C11.9167 26.2976 11.8708 26.3803 11.8257 26.4615C11.7993 26.4516 11.773 26.4402 11.7469 26.4271ZM22.1554 28.7211C22.3076 28.6297 22.415 28.4851 22.4579 28.3133C22.5007 28.1418 22.4741 27.9635 22.3829 27.8113L22.1554 28.7211Z"
                    fill="#4A4AE6"
                    stroke="#4A4AE6"
                  />
                  <path
                    d="M27.8527 28.0933C27.7587 28.035 27.6732 27.966 27.5976 27.888L26.8782 27.5117L26.8782 27.5116L26.8381 27.4907C26.7243 27.4311 26.6083 27.4029 26.4965 27.4026L27.8527 28.0933ZM26.1717 26.862C26.1718 26.862 26.1719 26.8619 26.1721 26.8619L26.2275 27.0842L26.2275 27.0842L26.3126 27.4256L26.3125 27.4256L26.1717 26.862ZM30.3872 33.7857C30.387 33.7856 30.3869 33.7855 30.3867 33.7854L30.3872 33.7857ZM25.845 30.1872L25.8464 30.188L25.845 30.1872Z"
                    fill="#4A4AE6"
                    stroke="#4A4AE6"
                  />
                </svg>
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    46,328
                  </h4>
                  <p>Clubs</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M40 42V38C40 35.8783 39.1571 33.8434 37.6569 32.3431C36.1566 30.8429 34.1217 30 32 30H30C29.4696 30 28.9609 29.7893 28.5858 29.4142C28.2107 29.0391 28 28.5304 28 28V18C28 16.9391 27.5786 15.9217 26.8284 15.1716C26.0783 14.4214 25.0609 14 24 14C22.9391 14 21.9217 14.4214 21.1716 15.1716C20.4214 15.9217 20 16.9391 20 18V36L15.2 29.6C14.8274 29.1032 14.3443 28.7 13.7889 28.4223C13.2334 28.1446 12.621 28 12 28H11.132C9.402 28 8 29.402 8 31.132C8 31.7 8.154 32.258 8.446 32.744L14 42M24 8V6V8ZM36 20H38H36ZM10 20H12H10ZM14.686 10.686L13.272 9.272L14.686 10.686ZM33.314 10.686L34.728 9.272L33.314 10.686Z"
                    fill="#4A4AE6"
                  />
                  <path
                    d="M40 42V38C40 35.8783 39.1571 33.8434 37.6569 32.3431C36.1566 30.8429 34.1217 30 32 30H30C29.4696 30 28.9609 29.7893 28.5858 29.4142C28.2107 29.0391 28 28.5304 28 28V18C28 16.9391 27.5786 15.9217 26.8284 15.1716C26.0783 14.4214 25.0609 14 24 14V14C22.9391 14 21.9217 14.4214 21.1716 15.1716C20.4214 15.9217 20 16.9391 20 18V36L15.2 29.6C14.8274 29.1032 14.3443 28.7 13.7889 28.4223C13.2334 28.1446 12.621 28 12 28H11.132C9.402 28 8 29.402 8 31.132C8 31.7 8.154 32.258 8.446 32.744L14 42M24 8V6M36 20H38M10 20H12M14.686 10.686L13.272 9.272M33.314 10.686L34.728 9.272"
                    stroke="#4A4AE6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    828,867
                  </h4>
                  <p>Event Bookings</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M5.5 16.5V17H6H42H42.5V16.5V14.25C42.5 13.1228 42.0522 12.0418 41.2552 11.2448C40.4582 10.4478 39.3772 10 38.25 10H9.75C8.62283 10 7.54183 10.4478 6.7448 11.2448C5.94777 12.0418 5.5 13.1228 5.5 14.25V16.5ZM42.5 19.5V19H42H6H5.5V19.5V33.75C5.5 34.8772 5.94777 35.9582 6.7448 36.7552C7.54183 37.5522 8.62283 38 9.75 38H38.25C39.3772 38 40.4582 37.5522 41.2552 36.7552C42.0522 35.9582 42.5 34.8772 42.5 33.75V19.5ZM3.5 14.25C3.5 12.5924 4.15848 11.0027 5.33058 9.83058C6.50268 8.65848 8.0924 8 9.75 8H38.25C39.9076 8 41.4973 8.65848 42.6694 9.83058C43.8415 11.0027 44.5 12.5924 44.5 14.25V33.75C44.5 35.4076 43.8415 36.9973 42.6694 38.1694C41.4973 39.3415 39.9076 40 38.25 40H9.75C8.0924 40 6.50268 39.3415 5.33058 38.1694C4.15848 36.9973 3.5 35.4076 3.5 33.75V14.25ZM31.5 29H36C36.2652 29 36.5196 29.1054 36.7071 29.2929C36.8946 29.4804 37 29.7348 37 30C37 30.2652 36.8946 30.5196 36.7071 30.7071C36.5196 30.8946 36.2652 31 36 31H31.5C31.2348 31 30.9804 30.8946 30.7929 30.7071C30.6054 30.5196 30.5 30.2652 30.5 30C30.5 29.7348 30.6054 29.4804 30.7929 29.2929C30.9804 29.1054 31.2348 29 31.5 29Z"
                    fill="#4A4AE6"
                    stroke="#4A4AE6"
                  />
                </svg>
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    1,926,436
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
