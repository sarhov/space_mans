import React, { FC } from 'react'

import * as styles from './styles.module.scss'

const Social: FC = ({ children }): JSX.Element => (
  <div className={styles.social}>{children}</div>
)

export default Social
