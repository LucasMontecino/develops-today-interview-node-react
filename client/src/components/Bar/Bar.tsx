"use client";
import Chart from "react-apexcharts";
import styles from "./Bar.module.css";
import { useState } from "react";
import { PopulationType } from "@/lib/definitions";

export default function Bar({ population }: { population: PopulationType }) {
  const populationYears = population.populationCounts.map((el) => el.year);
  const populationValues = population.populationCounts.map((el) => el.value);

  const [chart] = useState({
    options: {
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        categories: populationYears,
        labels: {
          style: {
            colors: "#fff",
            fontSize: "8px",
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#fff",
            fontSize: "8px",
          },
        },
      },
    },
    series: [
      {
        data: populationValues,
      },
    ],
  });

  return (
    <div className={styles.bar}>
      <Chart
        type="bar"
        width="100%"
        options={chart.options}
        series={chart.series}
      />
    </div>
  );
}
