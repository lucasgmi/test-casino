import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          Mario Pepe Casino
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          An open source, decentralized casino built on Gamba.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://birdeye.so/token/CR4WrVcM1kExACKq1W4wbMEZziihBmJMnnqQ4rDJ8WdL?chain=solana"
            target="_blank"
            icon={<Icon.ExternalLink />}
          >
            BUY $MPEPE
          </Button>
        </div>
      </Section>
    </div>
  )
}
