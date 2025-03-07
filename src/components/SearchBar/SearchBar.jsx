import React, { useEffect, useState } from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const INITIAL_VALUES = {
  searchField: "",
};

const SearchBar = ({ searchField }) => {
  const handleSubmit = (values) => {
    if (values.searchField === "")
      return toast.error("Search field should not be empty");
    searchField(values.searchField);
  };

  return (
    <header>
      <Formik onSubmit={handleSubmit} initialValues={INITIAL_VALUES}>
        <Form className={css.formSearch}>
          <Field
            className={css.formFieldInput}
            autoComplete="off"
            type="text"
            name="searchField"
            autoFocus
            placeholder=""
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
