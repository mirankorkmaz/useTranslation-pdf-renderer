import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useTranslation } from "react-i18next";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyDocument = () => {
  const { t } = useTranslation();
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{t("Document.section_one")}</Text>
        </View>
        <View style={styles.section}>
          <Text>{t("Document.section_two")}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default MyDocument;
