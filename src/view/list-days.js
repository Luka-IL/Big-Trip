import {createElement} from "../utils";

export const createTripListDays = () => {
  return (
    `<ul class="trip-days">
    </ul>`
  );
};
export default class TripListDays {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTripListDays();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
