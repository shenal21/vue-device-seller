import { BASE_API_URL } from "@/common/Constant";
import axios from "axios";
import { authHeader } from "@/services/base.service";

const API_URL = BASE_API_URL + "/api/purchase";

class PurchaseService {
  savePurchase(purchase) {
    return axios.post(API_URL, purchase, { headers: authHeader() });
  }

  getAllPurchaseItems() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}

export default new PurchaseService();
