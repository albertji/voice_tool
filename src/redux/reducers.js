import { combineReducers } from 'redux'
import voiceTool from './reducers/voice/reducer_voice_tool'

export default combineReducers({
  voice_tool: voiceTool
})
