import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styled, { keyframes } from "styled-components";
import { AntDesign } from "@expo/vector-icons";
const Months = [
  "Janeiros",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const days = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
const Hours = ["08:00", "11:00", "14:00", "17:00"];
export default function Agenda() {
  const [selectYear, setSelectYear] = useState(0);
  const [selectMonth, setSelectMonth] = useState(10);
  const [selectDay, setSelectDay] = useState(0);
  const [selectHour, setSelectHour] = useState(null);
  const [ListDay, setListDay] = useState([]);
  const [ListHours, setLisHours] = useState([]);

  useEffect(() => {
    let daysInMonth = new Date(selectYear, selectMonth + 1, 0).getDate();
    let newListDays = [];

    for (let i = 1; i <= daysInMonth; i++) {
      let d = new Date(selectYear, selectMonth, i);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      let selDate = year + "-" + month + "-" + day;

      newListDays.push({
        status: ["Seg", "Ter"],
        weekday: days[d.getDay()],
        Number: i,
      });

      setListDay(newListDays);
      setSelectDay(1);
      setLisHours([]);
      setSelectHour(0);
    }
  }, [selectMonth, selectYear]);

  useEffect(() => {
    let today = new Date();
    setSelectYear(today.getFullYear()),
      setSelectYear(today.getFullYear()),
      setSelectDay(today.getDay());
  }, []);

  const handLeftDateClick = () => {
    let mountDate = new Date(selectYear, selectMonth, 1);
    mountDate.setMonth(mountDate.getMonth() - 1);
    setSelectYear(mountDate.getFullYear());
    setSelectMonth(mountDate.getMonth());
    setSelectDay(0);
  };
  const handRightDateClick = () => {
    let mountDate = new Date(selectYear, selectMonth, 1);
    mountDate.setMonth(mountDate.getMonth() + 1);
    setSelectYear(mountDate.getFullYear());
    setSelectMonth(mountDate.getMonth());
    setSelectDay(0);
  };

  return (
    <View style={styles.container}>
      <View style={styles.data}>
        <TouchableOpacity style={styles.dataprev} onPress={handLeftDateClick}>
          <AntDesign
            name="leftcircle"
            size={24}
            color="#fff"
            width="35"
            height="35"
          />
        </TouchableOpacity>
        <View style={styles.datatitleArea}>
          <Text style={styles.title}>
            {" "}
            {Months[selectMonth]} {selectYear}
          </Text>
        </View>
        <TouchableOpacity style={styles.datanext} onPress={handRightDateClick}>
          <AntDesign
            name="rightcircle"
            size={24}
            color="#fff"
            width="35"
            height="35"
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.dateList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {ListDay.map((item, key) => (
          <TouchableOpacity
            style={styles.dateitem}
            key={key}
            onPress={() => setSelectDay(item.Number)}
          >
            <Text style={styles.weekday}>{item.weekday}</Text>
            <Text style={styles.Number}>{item.Number}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {ListHours.length > 0 && (
        <View>
          <ScrollView
            style={styles.TimeList}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {ListHours.map((item, key) => (
              <TouchableOpacity
                style={styles.TimeItem}
                key={key}
                onPress={() => {}}
              >
                <Text TimeItemText>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  data: {
    flexDirection: "row",
    backgroundColor: "#38a69d",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  dataprev: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  datanext: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  datatitleArea: {
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  dateList: {
    backgroundColor: "#38a69d",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  dateitem: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 5,
  },
  weekday: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  Number: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
  },
  TimeItem: {
    width: 70,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  TimeItemText: {
    fontSize: 16,
  },
});
