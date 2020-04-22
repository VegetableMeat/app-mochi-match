export const CREATE_ROOM = 'CREATE_ROOM';

let nextRoomId = 0;

export const createRoom = (host, game) => {
    return {
        type: CREATE_ROOM,
        id: nextRoomId++,
        host,
        game
    };
}