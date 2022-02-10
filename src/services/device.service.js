import { BASE_API_URL } from "../common/Constant";
import axios from "axios";
import { authHeader } from "@/services/base.service";

const API_URL = BASE_API_URL + "/api/device";

class DeviceService {
  saveDevice(device) {
    return axios.post(API_URL, device, { headers: authHeader() });
  }

  deleteDevice(device) {
    return axios.delete(API_URL + device.id, { headers: authHeader() });
  }

  getAllDevices() {
    return axios.get(API_URL);
  }
}

export default new DeviceService();
