import React from  'react';
import { PDFDownloadLink, Document, Page,Text } from '@react-pdf/renderer'

const MyDoc = () => (
  <Document>
    <Page>
     <Text>
         Holaaa
     </Text>
    </Page>
  </Document>
)

const App = () => (
  <div>
    <PDFDownloadLink document={<MyDoc />} fileName="Ejemplo.pdf">
    {({loading}) => (loading ? 'Loading document...' : 'Download now!')}
     
    <input type="button" className="btn btn-success mr-2" value="Generar" />
     
    </PDFDownloadLink>
  </div>
);


export default App; 