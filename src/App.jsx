import { useState } from "react";

function App() {
  const [boy, setBoy] = useState("red");

  return (
    <div>
      <p className="relative rounded-sm bg-black font-medium text-red-50">
        chuks
      </p>
      <div className="flex rounded-2xl bg-yellow-50">chuks</div>
      <div className="flex p-4">helloa</div>
      <p className="bg-red-50 flex text-2xl rounded-xl font-pmedium ">hai</p>
    </div>
  );
}

export default App;
