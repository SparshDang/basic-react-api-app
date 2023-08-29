import React, { useRef } from "react";

import ProfileViewCard from "./ProfileViewCard";

import style from "./FiltersContainer.module.css";

export default function FiltersContainer(props) {
  const genderRef = useRef();
  const nationalityRef = useRef();

  const onFormSubmit = (event) => {
    event.preventDefault();
    let filters = {};
    if (genderRef.current.value !== "any") {
      filters["gender"] = genderRef.current.value;
    }
    if (nationalityRef.current.value !== "any") {
      filters["nat"] = nationalityRef.current.value;
    }

    props.applyFilters(filters);
  };
  return (
    <ProfileViewCard heading={"Filters"} classNames={style["filter-container"]}>
      <form onSubmit={onFormSubmit} className={style.form}>
          <div className={style["input-group"]}>
            <label htmlFor="gender">Gender:</label>
            <select name="gender" id="gender" ref={genderRef}>
              <option value="any">Any</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div className={style["input-group"]}>
            <label htmlFor="Nationality">Nationality:</label>
            <select name="nationality" id="nationality" ref={nationalityRef}>
              <option value="any">Any</option>
              <option value="AU">AU</option>
              <option value="BR">BR</option>
              <option value="CA">CA</option>
              <option value="CH">CH</option>
              <option value="DE">DE</option>
              <option value="DK">DK</option>
              <option value="ES">ES</option>
              <option value="FI">FI</option>
              <option value="FR">FR</option>
              <option value="GB">GB</option>
              <option value="IE">IE</option>
              <option value="IN">IN</option>
              <option value="IR">IR</option>
              <option value="MX">MX</option>
              <option value="NL">NL</option>
              <option value="NO">NO</option>
              <option value="NZ">NZ</option>
              <option value="RS">RS</option>
              <option value="TR">TR</option>
              <option value="UA">UA</option>
              <option value="US">US</option>

              {/* AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IN, IR, MX, NL, NO, NZ, RS, TR, UA, US */}
            </select>

        </div>
            <button type="submit">Apply</button>

      </form>
    </ProfileViewCard>
  );
}
