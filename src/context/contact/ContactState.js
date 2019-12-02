import React, { useReducer } from "react";
import { AxiosInstance as axios } from "axios";
import contactReducer from "./contactReducer";
import { backendUrl, SHOW_CONTACT } from "../types";

// submit contact form
const { children } = this.props;

const ContactState = props => {

  const initialState = {};

  const [state, dispatch] = useReducer(contactReducer, initialState);
  const submitContact = async contactData => {
    try {
      const res = await axios.post(`${backendUrl}/api/contact`, contactData);

      dispatch({
        type: SHOW_CONTACT,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };
  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default ContactState;
