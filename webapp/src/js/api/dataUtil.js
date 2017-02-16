import _ from 'lodash'

let util = {
  jsonToCol (data) {
    var resultValue = _.mapValues(data, item => {
      return _.values(item)
    })
    return resultValue
  },
  jsonToRow (data) {
    let column = Object.keys(data)
    console.info('remaping data ...')
    let dataMapTemp = Object.create(null)
    for (let cname in data) {
      let tempObj = data[cname]
      tempObj = _.mapValues(tempObj, item => {
        let returnValue = Object.create(null)
        returnValue[cname] = item
        return returnValue
      })
      _.merge(dataMapTemp, tempObj)
    }
    console.info('format data ...')
    let value = _.values(dataMapTemp)
    let index = _.keys(dataMapTemp)
    return {
      index,
      column,
      value
    }
  },
  numberToDate (data) {
    return data.map(item => {
      return new Date(item)
    })
  }

}

export default util

// '{"a":{"0":-0.5228677494,"1":1.4583901142,"2":-0.1184759876,"3":-0.2833546201,"4":-0.8312799014,"5":0.264941358,"6":-0.9807748503,"7":-0.8938193645,"8":-0.4552763767,"9":0.2931000759},"b":{"0":2.0192531909,"1":-0.4347209281,"2":0.7511844259,"3":0.2922078641,"4":0.4647406478,"5":-1.4511916261,"6":-0.3944572998,"7":-1.4337006246,"8":-0.5966207972,"9":-0.5356303696},"c":{"0":1.5420575118,"1":0.1626857295,"2":0.4009277104,"3":-0.5278409656,"4":0.0649416299,"5":-0.3363621822,"6":1.9580239583,"7":-1.7311164144,"8":1.5967041443,"9":0.996364274},"d":{"0":1.0136913502,"1":0.1876241188,"2":-0.4059025217,"3":-0.9612282251,"4":-0.7976150836,"5":-1.8877369507,"6":2.05851578,"7":2.3906896943,"8":0.0864873876,"9":-0.229591777},"e":{"0":1.9653803407,"1":0.5973497403,"2":-0.4899745812,"3":-0.280196472,"4":-0.8822534048,"5":0.4144111721,"6":1.1450705972,"7":-0.2362821253,"8":-1.2606381466,"9":-1.1278683875}}'
// {"A":{"1451606400000":-0.9549999138,"1451692800000":0.2998711502,"1451779200000":-0.2964416581,"1451865600000":1.5862093237,"1451952000000":-0.2680870549,"1452038400000":-0.5790121586,"1452124800000":0.7432011172,"1452211200000":-1.0296478393,"1452297600000":0.7245721622,"1452384000000":1.0674496898},"B":{"1451606400000":1.0082009339,"1451692800000":1.1192165589,"1451779200000":-0.736713602,"1451865600000":1.6249741013,"1451952000000":-0.5962383866,"1452038400000":0.9326836515,"1452124800000":-0.9429971875,"1452211200000":0.3218660197,"1452297600000":-0.7406957874,"1452384000000":1.3155514179},"C":{"1451606400000":-0.5152153864,"1451692800000":-0.3252005318,"1451779200000":-0.0666310877,"1451865600000":-0.343819094,"1451952000000":1.9745980381,"1452038400000":-0.3254762712,"1452124800000":0.2083773283,"1452211200000":-0.084970021,"1452297600000":1.4760879423,"1452384000000":-0.2665886439},"D":{"1451606400000":-0.3304653862,"1451692800000":-1.0347419864,"1451779200000":0.2444285648,"1451865600000":1.2659840887,"1451952000000":0.0082863746,"1452038400000":0.2243174852,"1452124800000":2.4655382825,"1452211200000":-1.0422945838,"1452297600000":0.591197058,"1452384000000":0.471041061},"E":{"1451606400000":0.662885835,"1451692800000":2.8318670717,"1451779200000":0.4074422299,"1451865600000":-0.3518333408,"1451952000000":0.8990614732,"1452038400000":1.0302400054,"1452124800000":-0.6131578036,"1452211200000":-1.3311601714,"1452297600000":0.2583872319,"1452384000000":0.3935032685}}