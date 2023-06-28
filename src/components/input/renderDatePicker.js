import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Portal } from "react-overlays";
import { range } from "lodash";
import { stringToDate } from "utils";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const CalendarContainer = ({ children }) => {
  const el = document.getElementById("calendar-portal");

  return <Portal container={el}>{children}</Portal>;
};

const RenderSelectDate = ({
  input,
  placeholder,
  className,
  startDate,
  minDate,
  maxDate,
  disabled,
  meta,
  onCalendarOpen,
  onCalendarClose,
}) => {
  // console.log(meta)
  // if (!startDate) return null;

  const years = range(1950, new Date().getFullYear() + 40, 1);
  const months = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];

  function handleCalendarOpen() {
    // console.log('Calendar open')
    onCalendarOpen && onCalendarOpen();
  }
  function handleCalendarClose() {
    // console.log('Calendar close')
    onCalendarClose && onCalendarClose();
  }

  return (
    <div>
      <DatePicker
        // {...input}
        onCalendarOpen={handleCalendarOpen}
        onCalendarClose={handleCalendarClose}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              className="middle none font-sans center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-1 rounded-md border text-blue-500 hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85]"
            >
              <ChevronLeftIcon className="h-4" />
            </button>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-1.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-0.5"
              value={date.getFullYear()}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full px-1.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mx-0.5"
              value={months[date.getMonth()]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              className="middle none font-sans center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-1 rounded-md border text-blue-500 hover:opacity-75 focus:ring focus:ring-blue-200 active:opacity-[0.85]"
            >
              <ChevronRightIcon className="h-4" />
            </button>
          </div>
        )}
        className={
          ("disabled:bg-gray-200 bg-gray-50 border border-gray-300 text-gray-900 text-xs rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500") + (meta?.invalid && meta?.error ? " hasError" : "")
        }
        selected={
          input.value
            ? stringToDate(input.value, "dmy")
            : stringToDate(startDate, "dmy")
        }
        dateFormat="dd-MM-yyyy"
        onChange={(date) => {
          date
            ? input.onChange(moment(date).format("DD/MM/YYYY"))
            : input.onChange(null);
        }}
        selectsStart
        // startDate={stringToDate(startDate, 'dmy')}
        // endDate={stringToDate(endDate, 'dmy')}
        placeholder={placeholder || "Nhập ngày"}
        minDate={minDate || null}
        maxDate={maxDate || null}
        popperContainer={CalendarContainer}
        disabled={disabled}
      />
      {meta?.invalid && meta?.error && (
        <div
          className="text-left"
          style={{
            color: "rgb(255, 85, 85)",
            margin: "0px 0px 10px",
            fontSize: "0.75rem",
          }}
        >
          {meta?.error}
        </div>
      )}
    </div>
  );
};

export default RenderSelectDate;
