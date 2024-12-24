import Team from '../app';

// eslint-disable-next-line object-curly-newline
const zombi = { name: 'Zombie', className: 'zombi' };
// eslint-disable-next-line object-curly-newline
const witch = { name: 'Daemon', className: 'witch' };
// eslint-disable-next-line object-curly-newline
const monk = { name: 'Magition', className: 'monk' };

// eslint-disable-next-line no-undef
test('Добавление персонажа', () => {
    const myTeam = new Team();
    myTeam.add(monk);
    const received = myTeam.members.has(monk);
    // eslint-disable-next-line no-undef
    expect(received).toBe(true);
});

// eslint-disable-next-line no-undef
test('Проверка на дубль', () => {
    const myTeam = new Team();
    myTeam.addAll(zombi, witch, monk, zombi, witch, monk);
    const received = myTeam.members.size;
    // eslint-disable-next-line no-undef
    expect(received).toBe(3);
});

// eslint-disable-next-line no-undef
test('Ошибка при добавлении существующего персонажа', () => {
    // eslint-disable-next-line no-undef
    expect(() => {
        const myTeam = new Team();
        myTeam.add(zombi);
        myTeam.add(zombi);
    }).toThrow('Ошибка');
});

// eslint-disable-next-line no-undef
test('Правильность преобразования массива', () => {
    const myTeam = new Team;
    myTeam.addAll(zombi, witch);
    const received = myTeam.toArray();
    const expected = [
        // eslint-disable-next-line object-curly-spacing, object-curly-newline
        {name: 'Zombie', className: 'zombi'},
        // eslint-disable-next-line object-curly-spacing, object-curly-newline
        {name: 'Daemon', className: 'witch'},
    ];
    // eslint-disable-next-line no-undef
    expect(received).toEqual(expected);
});