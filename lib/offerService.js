import { api } from "./api";

export class OfferService {
  static BASE_PATH = "/KuwaitMIC/Offer";

  static _createFormData(payload) {
    const formData = new FormData();
    Object.entries(payload).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(key, value instanceof Blob ? value : String(value));
      }
    });
    return formData;
  }

  static async submitCarOffer(payload) {
    const formData = this._createFormData(payload);
    const response = await api.post(`${this.BASE_PATH}/car`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }

  static async submitFireOffer(payload) {
    const response = await api.post(`${this.BASE_PATH}/fire`, payload);
    return response.data;
  }

  static async submitEngineerOffer(payload) {
    const response = await api.post(`${this.BASE_PATH}/engineer`, payload);
    return response.data;
  }

  static async submitMarineOffer(payload) {
    const response = await api.post(`${this.BASE_PATH}/marine`, payload);
    return response.data;
  }

  static async submitAccidentOffer(payload) {
    const formData = this._createFormData(payload);

    const response = await api.post(`${this.BASE_PATH}/accident`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  }
}
