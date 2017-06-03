import MainLayout from '../components/MainLayout';
import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UsersComponent from '../components/Users/Users';

function Users({location}) {
  return (
  <MainLayout location={location}>
    <div className={styles.normal}>
      <UsersComponent />
    </div>
  </MainLayout>
  )
}

export default connect()(Users);
