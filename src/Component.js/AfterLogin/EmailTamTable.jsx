import React from 'react'
import "../../style.css/AfterLogin/EmailTamplet.css"
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import { visuallyHidden } from '@mui/utils';
import { FaPencilAlt } from "react-icons/fa";
import MenuAppBar from './MenuAppBar';
import Sidebarcomponent from './Sidebarcomponent';

function createData(id, name, email, cDate, uDate, action) {
  return {
    id,
    name,
    email,
    cDate,
    uDate,
    action,
  };
}

const rows = [
  createData(1, 'Invite Email', 'Join Us', '27-Sep-2023', '28-Sep-2023', <FaPencilAlt className='pen' />),
  createData(2, 'Forgot Password', 'Reset Your Password', '27-Sep-2023', '27-Sep-2023', <FaPencilAlt className='pen' />),
  createData(3, 'Attendance Approve Request', 'You Have An Attendance Request...', '11-Oct-2023', '12-Oct-2023', <FaPencilAlt className='pen' />),
  createData(4, 'Attendance Approval Response', 'Attendace Request has been #at...', '21-Oct-2023', '21-Oct-2023', <FaPencilAlt className='pen' />),
  createData(5, 'Trip Approve Request', 'You have trip approve request', '21-Oct-2023', '21-Oct-2023', <FaPencilAlt className='pen' />),
  createData(6, 'Trip Approval Response', 'Trip Request has been #status#...', '21-Oct-2023', '21-Oct-2023', <FaPencilAlt className='pen' />),
  createData(7, 'Attendance Approval Response', 'Attendace Request has been #a...', '21-Oct-2023', '21-Oct-2023', <FaPencilAlt className='pen' />),
  createData(8, 'Invite Email', 'Join Us', '27-Sep-2023', '28-Sep-2023', <FaPencilAlt className='pen' />),
  createData(9, 'Forgot Password', 'Reset Your Password', '27-Sep-2023', '27-Sep-2023', <FaPencilAlt className='pen' />),
  createData(10, 'Trip Approval Response', 'Trip Request has been #status#...', '21-Oct-2023', '21-Oct-2023', <FaPencilAlt className='pen' />),
  createData(11, 'Attendance Approve Request', 'You Have An Attendance Request...', '11-Oct-2023', '12-Oct-2023', <FaPencilAlt className='pen' />),
  createData(12, 'Trip Approve Request', 'You have trip approve request', '21-Oct-2023', '21-Oct-2023', <FaPencilAlt className='pen' />),
  createData(13, 'Attendance Approve Request', 'You Have An Attendance Request...', '11-Oct-2023', '12-Oct-2023', <FaPencilAlt className='pen' />),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'email',
    numeric: true,
    disablePadding: false,
    label: 'Email Subject',
  },
  {
    id: 'cDate',
    numeric: true,
    disablePadding: false,
    label: 'Created Date',
  },
  {
    id: 'uDate',
    numeric: true,
    disablePadding: false,
    label: 'Updated Date',
  },
  {
    id: 'action',
    numeric: true,
    disablePadding: false,
    label: 'Action',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};





const EmailTamTable = () => {

    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const handleSelectAllClick = (event) => {
      if (event.target.checked) {
        const newSelected = rows.map((n) => n.id);
        setSelected(newSelected);
        return;
      }
      setSelected([]);
    };
  
    const handleClick = (event, id) => {
      const selectedIndex = selected.indexOf(id);
      let newSelected = [];
  
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
      setSelected(newSelected);
    };
  
   
  
    const isSelected = (id) => selected.indexOf(id) !== -1;
  
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const visibleRows = React.useMemo(
      () =>
        stableSort(rows, getComparator(order, orderBy)).slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage,
        ),
      [order, orderBy, page, rowsPerPage],
    );
    
  return (
    <>
   
       <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow                    
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                   
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                      
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                    <TableCell align="right">{row.cDate}</TableCell>
                    <TableCell align="right">{row.uDate}</TableCell>
                    <TableCell align="right">{row.action}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      
      </Paper>
     
    </Box>
    </>
  )
}

export default EmailTamTable
