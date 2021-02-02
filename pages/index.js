import * as React from 'react';
import moment from 'moment';

/**
 * Format the time like "8:30:25 PM".
 */
function formatTime(time) {
  return moment(time).format('LTS');
}

const Page = ({ time }) => {
  return (
    <p>The time is {time}.</p>
  );
};

export const getStaticProps = async () => {
  const resp = await fetch('http://worldtimeapi.org/api/timezone/EST');
  const data = await resp.json();
  const time = formatTime(data.datetime);

  return {
    props: {
      time,
    },
    revalidate: 5,
  };
};

export default Page;
