import { SafeAreaView, StyleSheet } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { useTheme } from "../../../utils/context/ThemeContext";

import { Avatar, Card, List } from "react-native-paper";
import Icon from "../../../components/Icon";
import { View } from "react-native";
import { Calendar } from "react-native-calendars";

export default function ProfileScreen() {
  const { theme } = useTheme();

  return (
    <SafeAreaView
      style={{
        ...styles.mainContainer,
        backgroundColor: theme.colors.background,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Card
          mode={"contained"}
          style={{
            ...styles.profileContainer,
            backgroundColor: theme.colors.card,
          }}
        >
          <Card.Title
            style={{ display: "flex", gap: 50 }}
            title="Denis Bodurov"
            subtitle="Bulgaria, Sofia"
            left={() => (
              <Avatar.Text
                style={{ borderWidth: 1, borderColor: theme.colors.activeTint }}
                size={90}
                label="DB"
              />
            )}
          />
        </Card>
        <Card
          mode={"contained"}
          style={{
            ...styles.dataContainer,
            backgroundColor: theme.colors.card,
          }}
        >
          <List.Section>
            <List.Subheader style={styles.sectionTitle}>
              Physical Characteristics
            </List.Subheader>
            <View style={{ paddingLeft: 15 }}>
              <List.Item
                titleStyle={styles.listItemTitle}
                title={`Gender: `}
                left={() => (
                  <Icon
                    library="MaterialCommunityIcons"
                    name="gender-male-female"
                    color={theme.colors.tint}
                    size={30}
                  />
                )}
              />
              <List.Item
                titleStyle={styles.listItemTitle}
                title="Age: "
                left={() => (
                  <Icon
                    library="MaterialCommunityIcons"
                    name="human-cane"
                    color={theme.colors.tint}
                    size={30}
                  />
                )}
              />
              <List.Item
                titleStyle={styles.listItemTitle}
                title="Height: "
                left={() => (
                  <Icon
                    library="MaterialCommunityIcons"
                    name="human-male-height-variant"
                    color={theme.colors.tint}
                    size={30}
                  />
                )}
              />
              <List.Item
                titleStyle={styles.listItemTitle}
                title="Weight: "
                left={() => (
                  <Icon
                    library="MaterialCommunityIcons"
                    name="weight"
                    color={theme.colors.tint}
                    size={30}
                  />
                )}
              />
            </View>
          </List.Section>
        </Card>
        <Card
          mode={"contained"}
          style={{ ...styles.calendar, backgroundColor: theme.colors.card }}
        >
          <Card.Title titleStyle={styles.sectionTitle} title="Days Active" />
          <Card.Content>
            <View key={theme.type}>
              <Calendar
                style={styles.calendar}
                theme={{
                  textMonthFontSize: 24,
                  textDayFontWeight: "bold",
                  textDayHeaderFontWeight: "bold",
                  textMonthFontWeight: "bold",
                  arrowColor: theme.colors.text,
                  monthTextColor: theme.colors.text,
                  calendarBackground: theme.colors.card,
                  backgroundColor: theme.colors.card,
                  selectedDayBackgroundColor: theme.colors.activeTint,
                  selectedDayTextColor: theme.colors.text,
                  todayTextColor: theme.colors.activeTint,
                  dayTextColor: theme.colors.text,
                  textDisabledColor: theme.colors.text,
                }}
                markedDates={{
                  "2023-12-11": { selected: true, marked: true },
                  "2023-12-12": { selected: true, marked: true },
                  "2023-12-13": { selected: true, marked: true },
                }}
              />
            </View>
          </Card.Content>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    padding: 10,
  },
  profileContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 150,
    marginBottom: 20,
    borderWidth: 0,
  },
  dataContainer: {
    padding: 10,
    marginBottom: 20,
  },
  listItemTitle: {
    fontWeight: "bold",
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 20,
  },
  calendar: {
    padding: 10,
    borderRadius: 20,
  },
  
});
