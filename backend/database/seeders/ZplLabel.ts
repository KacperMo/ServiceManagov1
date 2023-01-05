import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ZplLabel from 'App/Models/ZplLabel'

export default class extends BaseSeeder {
  public async run () {
    await ZplLabel.createMany([
      {
        label_name: 'DPD shipment',
        dpi: '205',
        height: '200',
        width: '300',
        zpl: 'CT~~CD,~CC^~CT~
        ^XA~TA000~JSN^LT0^MNW^MTT^PON^PMN^LH0,0^JMA^PR6,6~SD15^JUS^LRN^CI0^XZ
        ^XA
        ^MMT
        ^PW378
        ^LL0236
        ^LS0
        ^BY2,3,36^FT10,75^BCN,,Y,N
        ^FD>:AD/>507291046>6/>53447^FS
        ^FT74,32^A0N,29,31^FB286,1,0,C^FH\^FDServiceManago.pl^FS
        ^FO16,110^GB350,0,1^FS
        ^FT17,138^A0N,25,24^FH\^FDSamsung Galaxy Note 10 ultra Black^FS
        ^FT16,214^A0N,17,16^FH\^FDt: 880-880-880^FS
        ^FT16,189^A0N,17,16^FH\^FDPawel W.^FS
        ^FO183,150^GB0,76,1^FS
        ^FT198,164^A0N,17,16^FH\^FDZalany, frp, diagnoza^FS
        ^FT200,189^A0N,17,16^FH\^FDSerwisant: Arek^FS
        ^FT200,214^A0N,17,16^FH\^FD20.02.2023^FS
        ^FT17,164^A0N,17,16^FH\^FDS/N: RF8M32SD7UY^FS
        ^PQ1,0,1,Y^XZ
        ',
        public: true,
      }
    ])
  }
}
