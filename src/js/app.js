import db from '../db.json';
import Table from "../components/table/table";
import { sortAscending, sortDescending } from '../lib/utils';

async function app() {
    const table = new Table('tbody');
    table.render(db);

    const sortProp = async (prop) => {
        const firstSort = () => new Promise((resolve) => {
            setTimeout(() => {
                table.sortTable(prop, sortAscending);
                resolve();
            }, 1000);
        });
        const secondSort = () => new Promise((resolve) => {
            setTimeout(() => {
                table.sortTable(prop, sortDescending);
                resolve();
            }, 1000);
        });

        await firstSort();
        await secondSort();

        return;
    }

    while (true) {
        for (let prop of table.props) {
            await sortProp(prop);
        }
    }
}

app();
