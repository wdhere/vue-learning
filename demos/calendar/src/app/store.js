import { reactive } from "vue";
import { seedData } from "./seed.js";

export const store = {
  state: {
    data: reactive(seedData),
  },
  getActiveDay() {
    return this.state.data.find((day) => day.active);
  },
  setActiveDay(dayId) {
    this.state.data.forEach((dayObj) => {
      dayObj.id === dayId ? (dayObj.active = true) : (dayObj.active = false);
    });
  },
  submitEvent(eventDetails) {
    const activeDay = this.getActiveDay();
    activeDay.events.push({ details: eventDetails, edit: false });
  },
  editEvent(dayId, eventDetails) {
    this.resetEditOfAllEvents();
    const eventObj = this.getEventObj(dayId, eventDetails);
    eventObj.edit = true;
  },
  resetEditOfAllEvents() {
    this.state.data.forEach((day) => {
      day.events.forEach((event) => {
        event.edit = false;
      });
    });
  },
  deleteEvent(dayId, eventDetails) {
    const dayObj = this.state.data.find((day) => day.id === dayId);
    const indexToRemove = dayObj.events.findIndex(
      (event) => event.details == eventDetails
    );
    dayObj.events.splice(indexToRemove, 1);
  },
  updateEvent(dayId, originalEventDetails, updatedEventDetails) {
    const eventObj = this.getEventObj(dayId, originalEventDetails);
    eventObj.details = updatedEventDetails;
    eventObj.edit = false;
  },
  getEventObj(dayId, eventDetails) {
    const dayObj = this.state.data.find((day) => day.id === dayId);
    const eventObj = dayObj.events.find(
      (event) => event.details === eventDetails
    );
    return eventObj;
  },
};
