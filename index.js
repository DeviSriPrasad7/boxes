const Box = (props) => {
  //  Write your code here.
  const { className, boxText } = props;
  return <button className={className}>{boxText}</button>;
};

const element = (
  //  Write your code here.
  <div class="box-container">
    <h1>Boxes</h1>
    <div class="sub-container">
      <Box className="small-box" boxText="small" />
      <Box className="medium-box" boxText="medium" />
      <Box className="high-box" boxText="high" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
