import React, { useState } from "react";

const PageTitle = (props) => {
  const [title] = useState(props.title);
  const [count] = useState(props.count);

  return (
    <p>
      {title}: {count}
    </p>
  );
};

export default PageTitle;
