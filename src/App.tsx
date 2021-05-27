import React, {useState, useCallback, useEffect} from 'react';
import {
  Button,
  TopBar,
  AppProvider,
  Frame,
  Card,
  ResourceList,
  ResourceItem,
  TextStyle,
  Page,
  Avatar,
  Loading,
  Modal,
  DescriptionList,
  Stack,
  Link
} from '@shopify/polaris';

interface ICoinInfo {
  Name: string;
  FullName: string
  ImageUrl: string
  Url: string
  Algorithm: string
  ProofType: string
  Rating: { Weiss: {Rating:string}}
  NetHashesPerSecond: number
  BlockNumber: number
  BlockTime: number
  BlockReward: number
  AssetLaunchDate: string
  MaxSupply: number
}

export function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false); 
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState<ICoinInfo>();
  const [active, setActive] = useState(false);

  useEffect(() => {
    fetch("https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.Data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  error && (<div>Error: {error}</div>)
  !isLoaded && (<Frame><Loading /></Frame>)
  
  const handleThemeChange = useCallback(
    () => setIsDarkTheme((isDarkTheme) => !isDarkTheme),
    [],
  );

  const toggleModal = useCallback(() => setActive((active) => !active), []);

  const theme:{} = {
    colors: {
      surface: '#FFFFFF',
      onsurface: '#212B36',
    },
    colorScheme: isDarkTheme ? 'dark' : 'light',
    logo: {
      width: 193,
      topBarSource: `Logo_anny.svg`,
      url: '/',
      accessibilityLabel: 'Trade Smarter',
    },
  };

  const topBarMarkup = (
    <TopBar />
  );

  return (
    <AppProvider
        theme={theme}
        i18n={{
          Polaris: {},
        }}
    >
      <Frame topBar={topBarMarkup}>
        <Page title="Toplist by Market Cap" fullWidth>
          <Card>
            <Card.Section>
            <ResourceList
              items={items}
              renderItem={(item) => {
                const {CoinInfo, DISPLAY}:any = item;
                return (
                  <ResourceItem
                    id={CoinInfo.Id}
                    url={''}
                    media={
                      <Avatar size="medium" name={`${CoinInfo.Name}`} source={`https://www.cryptocompare.com/${CoinInfo.ImageUrl}`} />
                    }
                    accessibilityLabel={`View details for ${CoinInfo.FullName}`}
                    onClick={()=>{toggleModal(); setSelected(CoinInfo)}}
                  > 
                    <TextStyle variation="strong">{`${CoinInfo.FullName}`} ({`${CoinInfo.Name}`})</TextStyle><br />
                    <TextStyle variation="subdued">Price: {`${DISPLAY.USD.PRICE}`}</TextStyle><br />
                    <TextStyle variation="subdued">24H Volume: {`${DISPLAY.USD.VOLUME24HOUR}`}</TextStyle>
                  </ResourceItem>
                );
              }}
            />
            </Card.Section>
            <Card.Section>
              <Stack alignment="trailing" distribution="equalSpacing">
              <TextStyle variation="subdued">
                Made with 🧡 © 2021
              </TextStyle>
              <Button size="slim" onClick={handleThemeChange}>
                {!!isDarkTheme ? 'light theme' : 'dark theme'}
              </Button>
              </Stack>
            </Card.Section>
          </Card>
        
          <Modal
          open={active}
          onClose={toggleModal}
          title="Coin Info"
          primaryAction={{
            content: 'Close',
            onAction: toggleModal,
          }}
          >
            <Modal.Section>
              <Card>
                <Card.Header title={`${selected?.FullName} (${selected?.Name})`}>
                  <Avatar size="medium" name={`${selected?.Name}`} source={`https://www.cryptocompare.com/${selected?.ImageUrl}`} />
                </Card.Header>
                <Card.Section>
                  <DescriptionList
                    items={[
                      {
                        term: 'Algorithm',
                        description: `${selected?.Algorithm}`,
                      },
                      {
                        term: 'ProofType',
                        description: `${selected?.ProofType}`,
                      },
                      {
                        term: 'Rating',
                        description: `${selected?.Rating.Weiss.Rating}`,
                      },
                      {
                        term: 'NetHashesPerSec',
                        description: `${selected?.NetHashesPerSecond}`,
                      },
                      {
                        term: 'BlockNumber',
                        description: `${selected?.BlockNumber}`,
                      },
                      {
                        term: 'BlockTime',
                        description: `${selected?.BlockTime}`,
                      },
                      {
                        term: 'BlockReward',
                        description: `${selected?.BlockReward}`,
                      },
                      {
                        term: 'AssetLaunchDate',
                        description: `${selected?.AssetLaunchDate}`,
                      },
                      {
                        term: 'MaxSupply',
                        description: `${selected?.MaxSupply}`,
                      },
                      {
                        term: 'Overview',
                        description: <Link url={`https://www.cryptocompare.com${selected?.Url}`} external>
                          CryptoCompare
                        </Link>,
                      },
                    ]} spacing="tight"
                  />
                </Card.Section>
              </Card>
            </Modal.Section>
          </Modal>
        </Page>  
      </Frame>
    </AppProvider>  
  );
}
