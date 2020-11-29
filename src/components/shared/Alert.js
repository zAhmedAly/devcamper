import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts.map((alert) => (
    <div className="row mt-5">
      <div className="col-md-6 m-auto">
        <div
          key={alert.id}
          className={`text-center alert alert-${alert.alertType}`}
        >
          {alert.msg}
        </div>
      </div>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
