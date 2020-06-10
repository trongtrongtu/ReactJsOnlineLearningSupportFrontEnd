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
async function myAccount(user_name) {
  try {
    let response = await fetch(`http://${IpAddress}:3001/my_account?username=${user_name}`);
    let responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}
async function listAllRoomWithUser(user_name) {
  try {
    let response = await fetch(`http://${IpAddress}:3001/list_all_rooms_with_user?username=${user_name}`);
    let responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}
async function update_user(username, gioi_tinh, ngay_sinh, email, sdt, dia_chi) {
  try {
    if (!gioi_tinh || !ngay_sinh || !email || !sdt || !dia_chi) {
      return 'empty';
    } else {
      let response = await fetch('http://' + IpAddress + ':3001/update_user', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          gioi_tinh: gioi_tinh,
          ngay_sinh: ngay_sinh,
          email: email,
          sdt: sdt,
          dia_chi: dia_chi
        })
      });
      let responseJson = await response.json();
      return responseJson.result;
    }
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}
async function listMessageWithRoom(room_Name) {
  try {
    let response = await fetch(`http://${IpAddress}:3001/message_with_user_to_room?roomName=${room_Name}`);
    let responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}
async function list_all_users(user_name) {
  try {
    let response = await fetch(`http://${IpAddress}:3001/list_all_users?username=${user_name}`);
    let responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}
async function listMessageWithUser(user_name,username_friend) {
  try {
    let response = await fetch(`http://${IpAddress}:3001/message_with_user_to_user?username=${user_name}&usernamefriend=${username_friend}`);
    let responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(`Error is : ${error}`);
  }
}
export { register };
export { login };
export { myAccount };
export { listAllRoomWithUser };
export { update_user };
export { listMessageWithRoom };
export { list_all_users };
export {listMessageWithUser};