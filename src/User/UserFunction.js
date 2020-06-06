const IpAddress = 'localhost';
const apiGetAllProducts = 'http://' + IpAddress + ':3002/list_all_messages';
const apiInsertNewProduct = 'http://' + IpAddress + ':3002/insert_new_message';
const apiGetAllUsers = 'https://' + IpAddress + ':4443/api/sessions';

async function register(user_name, pass_word, email, dia_chi, sdt, gioi_tinh, ngay_sinh) {
  try {
    if (!user_name || !pass_word || !email || !dia_chi || !sdt || !gioi_tinh || !ngay_sinh) {
      return 'empty';
    } else {
      let response = await fetch(`http://${IpAddress}:3001/register?username=${user_name}&password=${pass_word}&email=${email}&dia_chi=${dia_chi}&sdt=${sdt}&gioi_tinh=${gioi_tinh}&ngay_sinh=${ngay_sinh}`);
      let responseJson = await response.json();
      return responseJson.result;
    }
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}
async function login(user_name, pass_word) {
  try {
    if (!user_name || !pass_word) {
      return 'empty';
    } else {
      let response = await fetch(`http://${IpAddress}:3001/login?username=${user_name}&password=${pass_word}`);
      let responseJson = await response.json();
      return responseJson.result;
    }
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}
async function getUsersFromServer() {
  try {
    let response = await fetch(apiGetAllUsers);
    let responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}
export { register };
export { login };
export { getUsersFromServer };