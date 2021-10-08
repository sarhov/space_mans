import React, { FC } from 'react'

import * as styles from './styles.module.scss'

const SpaceBackground: FC = ({ children }): JSX.Element => (
  <div className={styles.space__background}>{children}</div>
)

export default SpaceBackground
