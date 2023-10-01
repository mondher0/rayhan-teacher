"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import "./students-number-chart.css";
import { useTranslations } from "next-intl";

const StudentsNumberChart = () => {
  const t = useTranslations("Index");
  const chartRef = useRef(null);
  Chart.register(ChartDataLabels);

  useEffect(() => {
    if (chartRef.current) {
      const chartData = {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Solde professeurs",
            backgroundColor: ["#6F52ED"],
            borderColor: ["rgba(255, 255, 255, 0)"],
            borderWidth: 5,
            borderRadius: 7,
            data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
            borderSkipped: false,
          },
          {
            label: "Solde plateforme",
            backgroundColor: ["#FF7A00"],
            borderColor: ["rgba(255, 255, 255, 0)"],
            borderWidth: 5,
            borderRadius: 7,
            data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
            borderSkipped: false,
          },
        ],
      };

      const chartConfig = {
        type: "bar",
        data: chartData,
        options: {
          responsive: true,
          layout: {
            padding: 8,
          },
          scales: {
            y: {
              beginAtZero: true,
              display: true,
            },
          },
          barThickness: 15,
          plugins: {
            legend: {
              display: false,
            },
            datalabels: {
              color: "#6B778C",
              align: "center",
              offset: "10px",
              anchor: "end",
            },
          },
        },
      };

      const existingChart = Chart.getChart(chartRef.current);
      if (existingChart) {
        existingChart.destroy();
      }

      const newChart = new Chart(chartRef.current, chartConfig);

      return () => {
        newChart.destroy();
      };
    }
  }, []);

  return (
    <div className="students-number-chart">
      <div className="chart-desc">
        <p className="chart-title">{t("Students number change per month")}</p>
        <div className="labels">
          <div className="applied">
            <div></div>
            {t("applied")}
          </div>
          <div className="left">
            <div></div>
            {t("left")}
          </div>
        </div>
      </div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default StudentsNumberChart;
