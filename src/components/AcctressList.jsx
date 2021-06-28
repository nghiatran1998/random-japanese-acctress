import PropTypes from "prop-types";
import React, { Fragment } from "react";
import "./AcctressList.scss";

AcctressList.propTypes = {
  acctress: PropTypes.object,
};

AcctressList.defaultProps = {
  acctress: {},
};

function AcctressList(props) {
  const { acctress } = props;
  const {
    name,
    japanName,
    hiragana,
    birthday,
    blood_type,
    hobby,
    prefectures,
  } = acctress;

  return (
    <Fragment key="acctress-list">
      <ul>
        <li>Name: {name} </li>
        <li>Japan Name: {japanName} </li>
        <li>Hiragana: {hiragana} </li>
        <li>Birthday: {birthday ? birthday : "Null"} </li>
        <li>Blood Type: {blood_type ? blood_type : "Null"} </li>
        <li>Hobby: {hobby ? hobby : "Null"} </li>
        <li>Prefectures: {prefectures ? prefectures : "Null"} </li>
      </ul>
    </Fragment>
  );
}

export default AcctressList;
