import "./App.css";
import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import Logo from './assests/logo.png'

function App() {
  const [fileContent, setFileContent] = useState("");
  const [decryptedArray, setDecryptedArray] = useState([]);

  const handleFileRead = (event) => {
    var file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        setFileContent(content);
      };
      reader.readAsText(file);
    }
  };

  // const decryptedArray = [];
  // const [recArray,setRecArray]=useState('')

  useEffect(() => {
    // setRecArray(fileContent)
    const encryptedBlocks = fileContent.split("\n");
    const decryptedContentsArray = encryptedBlocks.map((encryptedBlock) => {
      const decryptedBlock = CryptoJS.AES.decrypt(
        encryptedBlock,
        "123"
      ).toString(CryptoJS.enc.Utf8);
      try {
        const decryptedObject = JSON.parse(decryptedBlock);
        return decryptedObject;
      } catch (error) {
        console.error("Error parsing JSON:", error);
        return null; // Handle error case here
      }
    });
    setDecryptedArray(decryptedContentsArray.filter((item) => item !== null));
  }, [fileContent]);

  return (
    <div className="App">

      <nav class="navbar bg-body-tertiary">
        <div class="nav container-fluid">
          <a class="navbar-brand" href="app">
            <img src={Logo} alt="Logo" width="60" height="60" class="d-inline-block align-text-top"/>
            <span className="logoName">MFCS DECRYPTOR</span>
          </a>
        </div>
      </nav>

      <input type="file" id="fileInput" onChange={handleFileRead} />

      <div className="table-container">
      <table class="table table-hover">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th scope="col">FC_RECEIPT_NO</th>
            <th scope="col">ACCOUNTNO</th>
            <th scope="col">ORIGINAL_ACCOUNTNO</th>
            <th scope="col">BATCHNO</th>
            <th scope="col">SITEID</th>
            <th scope="col">FC_DATE</th>
            <th scope="col">BACK_DATE</th>
            <th scope="col">DISCOUNT_AMOUNT</th>
            <th scope="col">COLLECTED_AMOUNT</th>
            <th scope="col">PAYMENT_METHOD_ID</th>
            <th scope="col">CHEQUENO</th>
            <th scope="col">BANK_ID</th>
            <th scope="col">BRANCH_ID</th>
            <th scope="col">CREDITCARD_NO</th>
            <th scope="col">CC_BANK_ID</th>
            <th scope="col">CC_EXPIRY_DATE</th>
            <th scope="col">SWIPE_METHOD</th>
            <th scope="col">SWIPE_REFERENCE</th>
            <th scope="col">MR_BOOK_NO</th>
            <th scope="col">MR_SHEET_NO</th>
            <th scope="col">USER_INSERTED</th>
            <th scope="col">DATE_INSERTED</th>
            <th scope="col">USER_MODIFIED</th>
            <th scope="col">DATE_MODIFIED</th>
            <th scope="col">REFNO</th>
            <th scope="col">SYNC_ST</th>
          </tr>
        </thead>
        <tbody>
          {decryptedArray.map((item, index) => (
            <tr key={index}>
              <td>{item.FC_RECEIPT_NO}</td>
              <td>{item.ACCOUNTNO}</td>
              <td>{item.ORIGINAL_ACCOUNTNO}</td>
              <td>{item.BATCHNO}</td>
              <td>{item.SITEID}</td>
              <td>{item.FC_DATE}</td>
              <td>{item.BACK_DATE}</td>
              <td>{item.DISCOUNT_AMOUNT}</td>
              <td>{item.COLLECTED_AMOUNT}</td>
              <td>{item.PAYMENT_METHOD_ID}</td>
              <td>{item.CHEQUENO}</td>
              <td>{item.BANK_ID}</td>
              <td>{item.BRANCH_ID}</td>
              <td>{item.CREDITCARD_NO}</td>
              <td>{item.CC_BANK_ID}</td>
              <td>{item.CC_EXPIRY_DATE}</td>
              <td>{item.SWIPE_METHOD}</td>
              <td>{item.SWIPE_REFERENCE}</td>
              <td>{item.MR_BOOK_NO}</td>
              <td>{item.MR_SHEET_NO}</td>
              <td>{item.USER_INSERTED}</td>
              <td>{item.DATE_INSERTED}</td>
              <td>{item.USER_MODIFIED}</td>
              <td>{item.DATE_MODIFIED}</td>
              <td>{item.REFNO}</td>
              <td>{item.SYNC_ST}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
