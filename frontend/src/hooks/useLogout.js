import { useAuthContext} from './useAuthContext';
import { useWorkoutsContext} from './useWorkoutsContext';

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const { dispatch: workoutaDispatch  } = useWorkoutsContext()

    const logout = () => {
        //remove user from storage
        localStorage.removeItem('user');

        //dispatch logout action
        dispatch({ type: 'LOGOUT'})
        workoutaDispatch({type: 'SET_WORKOUTS', payload: null})
    }
    return { logout }
}