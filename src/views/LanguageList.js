/* global strings */
import React from 'react';
import { connect } from 'react-redux';
import { goBack } from 'react-router-redux';

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ActionHistory from 'material-ui/svg-icons/action/history';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { transparent } from 'material-ui/styles/colors';

import {
  getInputLanguages,
  getOutputLanguages,
  getOcrSupportedLanguages,
} from '../libs/languageUtils';

import { updateInputLang, updateOutputLang } from '../actions/settings';

class LanguageList extends React.Component {
  getStyles() {
    return {
      container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      },
      listContainer: {
        flex: 1,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
      },
    };
  }

  render() {
    const { type, recentLanguages, onCloseTouchTap, onLanguageTouchTap } = this.props;
    const styles = this.getStyles();

    let languages;
    if (type === 'inputLang') languages = getInputLanguages();
    else if (type === 'ocrInputLang') languages = getOcrSupportedLanguages();
    else languages = getOutputLanguages();

    /* Need to add back for localizing in the future
    languages.sort((x, y) => {
      if (x === 'auto') return -1;
      if (y === 'auto') return 1;
      return strings[x].localeCompare(strings[y]);
    });
    */

    const groups = {};
    languages.forEach((x) => {
      const y = strings[x][0];
      if (groups[y]) {
        groups[y].push(x);
      } else {
        groups[y] = [x];
      }
    });


    return (
      <div style={styles.container}>
        <AppBar
          title={type === 'inputLang' ? strings.chooseAnInputLanguage : strings.chooseAnOutputLanguage}
          iconElementLeft={<IconButton><NavigationClose /></IconButton>}
          onLeftIconButtonTouchTap={onCloseTouchTap}
        />
        <div style={styles.listContainer}>
          <List>
            {recentLanguages.map((langId, i) => (
              <ListItem
                key={`lang_recent_${langId}`}
                primaryText={strings[langId]}
                leftIcon={i === 0 ? (
                  <Avatar
                    icon={<ActionHistory />}
                    backgroundColor={transparent}
                    style={{ left: 0, top: -8 }}
                  />
                ) : null}
                insetChildren={i > 0}
                onTouchTap={() => onLanguageTouchTap(type, langId)}
              />
            ))}
            <Divider inset />
          </List>
          {Object.keys(groups).map(groupId => [(
            <List key={groupId}>
              {groups[groupId].map((langId, i) => (
                <ListItem
                  key={`lang_${langId}`}
                  primaryText={strings[langId]}
                  leftIcon={i === 0 ? (
                    <Avatar backgroundColor={transparent} style={{ left: 8, top: 4 }}>
                      {groupId}
                    </Avatar>
                  ) : null}
                  insetChildren={i > 0}
                  onTouchTap={() => onLanguageTouchTap(type, langId)}
                />
              ))}
            </List>
          ), <Divider inset />])}
        </div>
      </div>
    );
  }
}

LanguageList.propTypes = {
  recentLanguages: React.PropTypes.arrayOf(React.PropTypes.string),
  type: React.PropTypes.string,
  onCloseTouchTap: React.PropTypes.func,
  onLanguageTouchTap: React.PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  onCloseTouchTap: () => {
    dispatch(goBack());
  },
  onLanguageTouchTap: (type, value) => {
    dispatch(goBack());

    if (type === 'inputLang') {
      dispatch(updateInputLang(value));
    } else if (type === 'outputLang') {
      dispatch(updateOutputLang(value));
    }
  },
});

const mapStateToProps = (state, ownProps) => ({
  recentLanguages: state.settings.recentLanguages,
  type: ownProps.location.query.type,
});

export default connect(
  mapStateToProps, mapDispatchToProps,
)(LanguageList);